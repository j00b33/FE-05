import { useForm } from "react-hook-form";
import withAuth from "../../../commons/hoc/withAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateProductUIPage from "./upload.presenter";

interface FormValues {
  product?: string;
  contents?: string;
  price?: number;
}

const schema = yup.object().shape({
  product: yup.string().required("Enter the name of product"),
  contents: yup
    .string()
    .min(10, "Description should be longer than 10 characters")
    .max(300, "Description cannot be longer than 300 characters")
    .required("Enter descriptions about your product"),
  price: yup.number().required("Enter the price of the product"),
});

const CreateProductContainer = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log("========Data Check========");
    console.log(data);
  };

  return (
    <CreateProductUIPage
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
};

export default withAuth(CreateProductContainer);
