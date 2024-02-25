import HomeSkeleton from './HomeSkeleton';
import { useQuery } from '@tanstack/react-query';
import { addRequest } from '../../api/axios';
import Error from '../Error/Error';
import AgeChart from '../../components/AgeChart/AgeChart';
import ApplicationDateChart from '../../components/ApplicationDateChart/ApplicationDateChart';
import TableData from '../../components/Table/TableData';

function Home() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['cards'],
    queryFn: () =>
      addRequest.get().then((res) => {
        return res.data;
      }),
    refetchOnWindowFocus: false,
    keepPreviousDat: true,
  });
  return (
    <div className="content">
      {isError ? <Error /> : isLoading ? <HomeSkeleton /> : <TableData data={data} />}

      <ApplicationDateChart data={data} />
      <AgeChart list={data} />
    </div>
  );
}

export default Home;
