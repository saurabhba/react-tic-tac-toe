import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-4">
      <h1 className="text-lg p-10 font-bold">Tic Tac Toe</h1>
      <Board />
    </main>
  );
}
