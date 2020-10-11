import { gql, useQuery } from '@apollo/client';
import { ClientPCsDocument } from '../../generated/graphql';

// eslint-disable-next-line
const GET_CLIENT_PCs = gql`
  query clientPCs {
    clientPCs {
      id
      name
      isOnline
      isOccupied
    }
  }
`;
function ClientPcs(): JSX.Element {
  const { data } = useQuery(ClientPCsDocument);
  const clientPCs = data?.clientPCs ?? [];
  return (
    <table className="w-full p-5">
      <thead>
        <tr className="text-left text-yellow-100 bg-gray-900">
          {clientPCs.length > 0 &&
            Object.keys(clientPCs[0]).map((key, i) => (
              <th className="px-4 py-3 border-2 border-black" key={i}>
                {key}
              </th>
            ))}
          <th colSpan={2} className="px-4 py-3 border-2 border-black">
            Controls
          </th>
        </tr>
      </thead>
      <tbody>
        {clientPCs.length > 0 &&
          clientPCs.map((clientPC, i) => {
            const values = Object.values(clientPC);
            return (
              <tr key={i} className="bg-gray-600">
                {values.map((val, i) => (
                  <td
                    className="px-4 py-2 text-gray-100 border-2 border-black"
                    key={i}
                  >
                    {typeof val === 'boolean' ? (val ? 'YES' : 'NO') : val}
                  </td>
                ))}
                <td className="px-4 py-2 text-gray-100 border-2 border-black">
                  <button
                    className="w-full h-full text-sm text-white bg-red-700 border-2 border-black rounded-md"
                    onClick={() => {
                      //TODO: SEND REQUEST TO SERVER TO LOCK PC
                    }}
                  >
                    LOCK
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-100 border-2 border-black">
                  <button
                    className="w-full h-full text-sm text-white bg-green-600 border-2 border-black rounded-md"
                    onClick={() => {
                      //TODO: SEND REQUEST TO SERVER TO UNLOCK PC
                    }}
                  >
                    UNLOCK
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
export default ClientPcs;
