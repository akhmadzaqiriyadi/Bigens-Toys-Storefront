import {useLoaderData} from 'react-router';
import {getPaginationVariables} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductCard} from '~/components/ProductCard'; // Impor komponen baru

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = () => {
  return [{title: `Hydrogen | Products`}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context, request}) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const [{products}] = await Promise.all([
    storefront.query(CATALOG_QUERY, {
      variables: {...paginationVariables},
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);
  return {products};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function AllProducts() {
  /** @type {LoaderReturnData} */
  const {products} = useLoaderData();

  return (
    <div className="collection">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full h-[437px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4"
        style={{backgroundImage: 'url(/images/headercollection.svg)'}}
      >
        <h1 className="text-5xl md:text-6xl font-bold font-chillax">
          Amazing Toy Collection
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Discover our incredible range of high-quality toys designed to inspire
          creativity and bring joy to children of all ages
        </p>
      </div>

      {/* Products Section */}
      <div className="px-4 py-8 md:py-12 lg:py-16">
        {/* Title and Description Section */}
        <div className="text-center max-w-3xl mx-auto my-16">
          <h2 className="text-5xl font-semibold font-chillax text-gray-800">
            The Originals Bigens
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Whether you’re rediscovering childhood memories or creating new
            ones, our collection offers the perfect bounce for every player.
          </p>
        </div>

        <PaginatedResourceSection
          connection={products}
          // Ganti className grid dengan flex column dan beri jarak
          resourcesClassName="flex flex-col items-center gap-8 md:gap-12"
        >
          {({node: product, index}) => (
            // Gunakan ProductCard, bukan ProductItem
            <ProductCard
              key={product.id}
              product={product}
              loading={index < 4 ? 'eager' : 'lazy'}
              index={index}
            />
          )}
        </PaginatedResourceSection>
      </div>
    </div>
  );
}

const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/product
const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${COLLECTION_ITEM_FRAGMENT}
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
