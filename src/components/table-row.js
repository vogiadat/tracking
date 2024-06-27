export const TableRow = ({ title, data }) => (
  <tr className='border-b grid sm:grid-cols-2 grid-cols-1'>
    <th
      scope='row'
      className='px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap dark:text-base-100 dark:bg-accent'
    >
      {title}
    </th>
    <td className='px-4 py-2 bg-base-200 text-accent'>{data}</td>
  </tr>
)
