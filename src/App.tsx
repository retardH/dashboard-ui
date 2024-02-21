import MainLayout from './components/layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <main className="bg-slate-100">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </main>
  );
}

export default App;
