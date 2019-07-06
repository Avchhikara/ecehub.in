import Layout from "./../components/Layout";
import AddArticleRouter from "./../components/AddArticleRouter";

function add() {
  return (
    <Layout
      title="Add Articles to help other in need | ecehub.in"
      description="ecehub.in provides everyone with an ability to add an article which will help other fellow students"
      children={<AddArticleRouter />}
    />
  );
}

export default add;
