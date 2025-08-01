import Sidebar from "../sidebar/Sidebar";
import UserList from "../userList/UserList";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-white w-screen">
      {/* Sidebar */}
      <aside className="flex gap-x-4 bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen">
        <Sidebar />
      </aside>
      <div className="lg:ml-60 lg:mr-60 p-8 flex-1 ml-36 h-screen w-full">{children}</div>
      {/* User List */}
      <aside className="hidden lg:block bg-gray-800 fixed top-0 right-0 z-40 lg:w-60 h-screen">
        <UserList />
      </aside>
    </div>
  );
};

export default Layout;
