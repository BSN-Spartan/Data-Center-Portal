const CustomTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <>
      <div
        className={
          "text-xl md:text-center px-7 py-7 md:text-3xl border-b-2 border-gray-300 border-solid font-bold"
        }
      >
        <p>{title}</p>
      </div>
      {description && (
        <p className="my-6 text-base text-[#767676] leading-7 md:text-xl md:mt-12">
          {description}
        </p>
      )}
    </>
  );
};

export default CustomTitle;
