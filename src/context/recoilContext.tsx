import { atom, RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// State 설정 방식
// export const isLoggedInState = atom({
//   key: "isLoggedIn",
//   default: false,
//   effects: [persistAtom],
// });

// page에서 전역값 가져오는 방식
// const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
