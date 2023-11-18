import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white/50 h-[25vh] flex justify-center items-center">
      <p className="text-black">{t("history.placeholder")}</p>
    </div>
  );
}

export default History;
