import { useQuery, gql } from "@apollo/client";
interface RunLoginTypeProps {
  id: string;
  passwd: string;
}

const GET_USER_INFO = gql`
  query MyQuery {
    allPeople {
      edges {
        node {
          defaultRequset
          defaultAddress
          password
          userId
        }
      }
    }
  }
`;

const RunLogin = ({ id, passwd }: RunLoginTypeProps) => {
  const { loading, data } = useQuery(GET_USER_INFO)
  if(!loading) {
      console.log(data.allPeople.edges)
  }

  return <></>;
};

export default RunLogin;
