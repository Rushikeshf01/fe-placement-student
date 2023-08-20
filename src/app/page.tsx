import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Home() {
  return (
    <Provider store={store}>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
    </main>
    </Provider>
  )
}
