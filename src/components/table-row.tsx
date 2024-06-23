export const TableRow = ({ title, data }) => (
  <tr className='border-b'>
    <th
      scope='row'
      className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-base-100 dark:bg-accent'
    >
      {title}
    </th>
    <td className='w-1/2 px-4 py-2 bg-base-200 text-accent'>{data}</td>
  </tr>
)
