import {Image, Money} from '@shopify/hydrogen';
import {Link} from 'react-router';

/**
 * @param {{
 * product: CollectionItemFragment;
 * loading?: 'eager' | 'lazy';
 * index: number;
 * }}
 */
export function ProductCard({product, loading, index}) {
  const variantUrl = `/products/${product.handle}`;
  const image = product.featuredImage;

  // Array warna latar belakang untuk konten
  const bgColors = ['bg-acient', 'bg-crimson-soft', 'bg-goldenrod-deep'];
  // Pilih warna berdasarkan index, ulangi setiap 3 produk
  const bgColor = bgColors[index % bgColors.length];

  // Menentukan urutan untuk gambar dan konten berdasarkan index ganjil/genap
  const isEven = index % 2 === 0;
  const imageOrderClass = isEven ? 'lg:order-1' : 'lg:order-2';
  const contentOrderClass = isEven ? 'lg:order-2' : 'lg:order-1';

  return (
    <div className="bg-primary rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden w-full max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Kolom Gambar (urutan dinamis) */}
        <div
          className={`relative h-full min-h-[300px] lg:min-h-0 ${imageOrderClass}`}
        >
          {image && (
            <Link to={variantUrl}>
              <Image
                alt={image.altText || product.title}
                data={image}
                loading={loading}
                sizes="(min-width: 45em) 50vw, 100vw"
                className="object-cover w-full h-full"
              />
            </Link>
          )}
        </div>

        {/* Kolom Detail Produk (urutan dan warna dinamis) */}
        <div
          className={`flex flex-col justify-center p-8 md:p-12 text-white space-y-6 ${bgColor} ${contentOrderClass}`}
        >
          <p className="font-normal text-base uppercase text-gray-300">
            The Original Bigens
          </p>
          <h2 className="text-3xl font-semibold font-chillax">
            <Link to={variantUrl}>{product.title}</Link>
          </h2>

          {/* Harga dan Diskon */}
          <div className="flex items-center gap-4 my-8">
            <div className="text-3xl font-semibold">
              <Money data={product.priceRange.minVariantPrice} />
            </div>
            <s className="text-normal text-gray-300 opacity-80">
              <Money
                data={{
                  amount: (
                    parseFloat(product.priceRange.minVariantPrice.amount) * 1.1
                  ).toFixed(2),
                  currencyCode:
                    product.priceRange.minVariantPrice.currencyCode,
                }}
              />
            </s>
            <span className="bg-white text-foreground font-normal text-sm py-1 px-3 rounded-full">
              10% OFF
            </span>
          </div>

          <p className="text-gray-200 fonyt-normal text-base">
            <strong>Best For:</strong> Recreational play, light exercise, kids'
            activities
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <img
              src="/images/ratingblack.svg"
              alt="Rating"
              className="h-5"
            />
            <span className="text-gray-300 font-medium">4.8 (127)</span>
          </div>

          {/* Tombol Aksi */}
          <Link
            to={variantUrl}
            className={`bg-white font-bold text-center py-4 px-8 rounded-full text-lg text-foreground transition-transform duration-300 hover:scale-105 shadow-md w-full ${
              bgColor === 'bg-secondary'
                ? 'text-secondary'
                : bgColor === 'bg-crimson-soft'
                ? 'text-crimson-soft'
                : 'text-goldenrod-deep'
            }`}
          >
            Detail Product
          </Link>
          <p className="text-center text-gray-300 text-sm">
            Brings back so many childhood memories!
          </p>
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('storefrontapi.generated').CollectionItemFragment} CollectionItemFragment */
