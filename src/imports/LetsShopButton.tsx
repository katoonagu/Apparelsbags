export default function LetsShopButton() {
  return (
    <div className="relative size-full" data-name="lets shop button">
      <div className="absolute bg-[rgb(255,255,255)] h-[72px] left-0 rounded-[10px] top-0 w-[275px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[41px] justify-center leading-[0] left-[137px] not-italic text-[32px] text-black text-center top-[36.5px] translate-x-[-50%] translate-y-[-50%] w-[212px]">
        <p className="leading-[normal]">GO</p>
      </div>
    </div>
  );
}