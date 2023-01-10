import Head from "next/head";
import { MetaProps } from "./meta.interface";

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "CafetimeDev Technology",
  keywords: "web and mobile development, ui/ux design, creative design",
  description:
    "Cafetimedev Technology Limited is a registered tech company based in Lagos state Nigeria. We are a team of enthusiastic designers and developers focused on designing, builting and deploying fast applications with clean code bases for proper management and future scaling.",
};

export default Meta;
