import { mainPageAboutConfig } from "@/config/main/pages";

const MainAboutPage = () => {
  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-6 lg:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-gray-600">
            {mainPageAboutConfig.general.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {mainPageAboutConfig.general.subTitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {mainPageAboutConfig.general.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainAboutPage;
