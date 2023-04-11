import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as InputField,
  ErrorMessage as ErrorMes,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;

export const Field = styled(InputField)`
  height: 20px;
  width: 200px;
  border: 2px solid orange;
  border-radius: 10px;
  margin-left: 145px;
`;

export const ErrorMessage = styled(ErrorMes)`
  text-align: center;
  color: red;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 200px;
  background-color: #f8be5338;
  border: 1px solid orange;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 30px 0 0 0;
  list-style: none;
  padding: 0;
  text-align: center;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 500;
  font-style: italic;
`;

export const Title = styled.h3`
text-aline: center;
background-color: red;
color: blue;

  // margin-bottom: 10px;
  // display: flex;
  // justify-content: space-evenly;
  // font-weight: 500;
  // font-style: italic;
`;

export const ButtonDelete = styled.button`
  width: 80px;
  height: 20px;
  background-color: #f8be5338;
  border: 1px solid orange;
  border-radius: 5px;
`;