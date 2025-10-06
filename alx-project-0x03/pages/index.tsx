import Layout from "@/components/layouts/Layout";




export default function Home() {
  return (
   <Layout>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <p>This is the home page content showing between Header and Footer.</p>
      </main>
    </Layout>
  );
}
