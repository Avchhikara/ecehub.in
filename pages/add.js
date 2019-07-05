import AddArticle from "./../component/AddArticle";
import Layout from "./../component/Layout";

const addarticle = () => {
  return (
    <Layout
      title="Electronics on your tips | EceHub.in"
      description="ecehub.in provides you with high quality electronics content"
      children={<AddArticle />}
    />
  );
};

export default addarticle;
