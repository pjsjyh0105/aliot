import { useRecoilCallback } from "recoil";
import { EditCurrentPage, EditRecentPage } from "../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";

export function usePageChange() {
  const [editPage, setEditPage] = useRecoilState(EditCurrentPage);
  const [editRecentPage, setEditRecentPage] = useRecoilState(EditRecentPage);
  const changePage = useRecoilCallback(
    ({ set }) =>
      (newPage) => {
        // 현재 페이지를 '최근 페이지'로 설정한 후 새 페이지로 업데이트
        set(EditRecentPage, (prevPage) => {
          set(EditCurrentPage, newPage);

          return prevPage; // 이전 페이지 값을 반환
        });
      },
    []
  );

  return changePage;
}
