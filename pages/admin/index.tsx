import ClientPCs from '../../components/admin/ClientPCs';
const SideMenus = [
  { name: 'Clients', url: 'clients', icon: 'link-to-url' },
  { name: 'Reports', url: 'clients', icon: 'link-to-url' },
  { name: 'Logout', url: 'clients', icon: 'link-to-url' },
];
function AdminPage(): JSX.Element {
  return (
    <div className="flex">
      <div className="flex flex-col w-56 min-h-screen bg-gray-500">
        {SideMenus.map((menu, i) => {
          return (
            <div
              key={i}
              className={`m-2 p-2 flex flex-row bg-red-${
                i % 2 == 0 ? '100' : '200'
              }`}
            >
              <div className="w-10 h-10 mr-5 text-sm bg-red-300">image</div>
              <p className="text-xl font-bold">{menu.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex-1 p-5">
        <ClientPCs></ClientPCs>
      </div>
    </div>
  );
}
export default AdminPage;
