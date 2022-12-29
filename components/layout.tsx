import Footer from "../components/footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Layout>
      {children}
      <Footer />
    </Layout>
  );
};

export default Layout;
