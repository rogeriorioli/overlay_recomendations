import Modal from "./components/Modal";
import { ProductProvider } from "./context/useProduct";

export default function Home() {
  return (
    <ProductProvider>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Modal />
      </main>
    </ProductProvider>
  );
}
