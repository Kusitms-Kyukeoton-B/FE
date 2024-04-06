import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

interface ValuesProps {
  title: string;
  keyword: string[]; //키워드
  description: string;
}

const InfoUpload = () => {
  const [focused, setFocused] = useState("");
  // 포커스 상태 변경 함수
  const handleFocus = (name: string) => {
    setFocused(name);
  };
  // 포커스 해제 함수
  const handleBlur = () => {
    setFocused("");
  };

  const [values, setValues] = useState<ValuesProps>({
    title: "",
    keyword: [], //키워드
    description: "",
  });

  // 키워드
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  // 키워드 input이 변경될 때마다 업데이트
  const keywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setValues({
      ...values,
      keyword: keywords,
    });
  };
  // 엔터를 누르면 키워드 배열에 값 추가 & input 초기화
  // e.nativeEvent.isComposing == false: onKeyDown 한글 오류 해결
  const keywordEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setKeywords((prevKeywords) => {
        const updatedKeywords = [...prevKeywords, inputValue];
        setValues({
          ...values,
          keyword: updatedKeywords,
        });
        return updatedKeywords;
      });
      setInputValue("");
      setInputValue("");
    }
  };
  // 키워드 배열에서 삭제
  const removeKeyword = (indexToRemove: number) => {
    setKeywords((prevKeywords) => {
      const updatedKeywords = prevKeywords.filter(
        (_, index) => index !== indexToRemove
      );
      setValues({
        ...values,
        keyword: updatedKeywords,
      });
      return updatedKeywords;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "projectName" || name === "productName") {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return (
    <>
      <Contents focus={focused} opt={"projectName"}>
        <Title>제목</Title>
        <InputContent
          //required
          type="text"
          name="projectName"
          placeholder="짤에 대한 환상적인 제목을 적어주세요"
          onFocus={() => handleFocus("projectName")}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="off"
        />
      </Contents>
      <Contents focus={focused} opt={"keyword"}>
        <Title>관련주제</Title>
        <InputContent
          type="text"
          name="keyword"
          placeholder="연관 주제를 선택해주세요"
          onFocus={() => handleFocus("keyword")}
          onBlur={handleBlur}
          onChange={keywordChange}
          onKeyDown={keywordEnter}
          value={inputValue}
          autoComplete="off"
        />
        <KeywordRegion>
          {keywords.map((keyword, index) => (
            <Keyword key={index}>
              {keyword}
              <div
                style={{ width: 20, height: 20, backgroundColor: "gray" }}
                onClick={() => removeKeyword(index)}
              />
            </Keyword>
          ))}
        </KeywordRegion>
      </Contents>
      <Contents focus={focused} opt={"productName"}>
        <Title>설명</Title>
        <InputContent
          //required
          type="text"
          name="productName"
          placeholder="짤에 대한 설명을 작성해주세요"
          onFocus={() => handleFocus("productName")}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="off"
        />
      </Contents>
    </>
  );
};

export default InfoUpload;

const Contents = styled.div<{ focus: string; opt: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  color: ${(props) => (props.focus === props.opt ? colors.main : "white")};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
`;
const InputContent = styled.input`
  display: flex;
  height: 50px;
  padding: 0px 20px;
  margin: 0px 20px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  color: black;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: #dedede;
  &:focus {
    outline: none;
    border: 1px solid ${colors.main};
  }
`;
const KeywordRegion = styled.ul`
  width: 100%;
  color: black;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 0.94rem;
`;
const Keyword = styled.li`
  display: inline-flex;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.1875rem;
  border-radius: 6.25rem;
  background: ${colors.main};
  margin-right: 0.5rem;
`;
const Title = styled.div`
  display: flex;
  padding-left: 30px;
  font-size: 1rem;
  color: black;
  margin-bottom: 5px;
`;
