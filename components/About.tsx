import { useTranslations } from 'next-intl';
export default function About() {
  const t = useTranslations('Index');
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center text-center mx-5 md:mx-20 mb-10 mt-40"
    >
      <p className="text-2xl md:text-4xl">{t("WhatIs")}</p>
      <br />
      <p className="text-xl md:text-2xl leading-10">
        {t("WhatIsExpanded")}
      </p>
      <br />
      <p className="text-2xl md:text-4xl">
        {t("WhyCall")}
      </p>
      <br />
      <p className="text-xl md:text-2xl leading-[4rem]">
        {t("WhyCallExpanded")}
      </p>
    </div>
  );
}
