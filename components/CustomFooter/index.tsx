export default function CustomFooter({ sysConfig }: { sysConfig: any }) {
  return (
    <div className={"bg-theme text-white text-base mt-20"}>
      <div>
        <div className="text-center mx-4">
          <p className="font-normal py-6 md:py-10  lg:pt-10 break-words">
            {sysConfig}
          </p>
        </div>
      </div>
    </div>
  );
}
