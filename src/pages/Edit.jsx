import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const { onDelete } = useContext(DiaryDispatchContext);
  const { onUpdate } = useContext(DiaryDispatchContext);

  const params = useParams();

  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제 할까요 다시 복구 되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요??")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NAGATIVE"} />
        }
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
};

export default Edit;
