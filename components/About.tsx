import { useTranslations } from 'next-intl';
export default function About() {
  const t = useTranslations('Index');
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center text-center mx-5 md:mx-20 mb-10 mt-40"
    >
      <p className="text-2xl md:text-4xl mt-5">{t("WhatIs")}</p>
      <p className="text-xl md:text-2xl leading-[5rem] mt-2 md:mt-4">
        {t("WhatIsExpanded")}
      </p>
      <p className="text-2xl md:text-4xl mt-5">
        {t("WhyCall")}
      </p>
      <p className="text-xl md:text-2xl leading-[5rem] mt-2 md:mt-4">
        {t("WhyCallExpanded")}
      </p>
    </div>
  );
}
