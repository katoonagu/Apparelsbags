interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onClick?: () => void;
}

export function ProductCard({ image, title, price, onClick }: ProductCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="aspect-[4/3] mb-4 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="capitalize text-sm mb-2 text-black">{title}</h3>
      <p className="uppercase text-xs text-black">{price}</p>
    </div>
  );
}
