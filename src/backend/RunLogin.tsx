import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
interface RunLoginTypeProps {
  id: string;
  passwd: string;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm: (flag: boolean) => void;
  goMain: () => void;
}

const GET_USER_INFO = gql`
  query MyQuery($userId: String!) {
    personByUserId(userId: $userId) {
      password
    }
  }
`;

const RunLogin = ({
  id,
  passwd,
  setRunLogin,
  setFailedAlarm,
  goMain,
}: RunLoginTypeProps) => {
  const { loading, data } = useQuery(GET_USER_INFO, {
    variables: {
      userId: id,
    },
  });
  useEffect(() => {
    if (!loading) {
      if (data.personByUserId === null) {
        /* console.log("존재하지 않는 아이디 입니다"); */
        setFailedAlarm(true);
        setRunLogin(false);
      } else if (passwd !== data.personByUserId.password) {
        console.log("비밀번호가 틀렸습니다");
        setFailedAlarm(true);
        setRunLogin(false);
      } else {
        setRunLogin(false);
        goMain();
        /* 여기서 setRunLogin을 꺼주는 이유는 Login에서 라우트가 변경되고 리랜더링을 시도하기 때문에 꺼버림 */
      }
    }
  });

  return <></>;
};

export default RunLogin;

/* 
컴포넌트 형으로 만들어놔서 버튼만 한번 눌리면 현 컴포넌트가 활성화되서
input에 작성할때마다 통신을 시도한다 (상위 컴포넌트의 useState때문에 게속 리렌더됨)
그런데 왜 함수형으로 안만들고 컴포넌트형으로 만들었냐 하면
useQuery같은 훅은 tsx즉 컴포넌트 안에서만 돌아가기 때문...
이럴경우엔 그냥 useEffect써서 렌더링시 한번만 돌려주면된다
*/
