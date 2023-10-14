import { useTranslations } from 'next-intl';
export default function About() {
  const t = useTranslations('Index');
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center text-center mx-5 md:mx-20 mb-10 mt-40"
    >
      <p className="text-2xl md:text-4xl mt-5">{t("WhatIs")}</p>
      <p className="text-xl md:text-2xl leading-10 md:leading-[4.1rem]">
        {t("WhatIsExpanded")}
      </p>
      <p className="text-2xl md:text-4xl mt-5 md:mt-8">
        {t("WhyCall")}
      </p>
      <p className="text-xl md:text-2xl leading-10 md:leading-[4.1rem]">
        {t("WhyCallExpanded")}
      </p>
    </div>
  );
}
