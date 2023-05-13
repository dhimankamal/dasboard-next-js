import React from "react";
import { useForm, FieldValues, ValidationRule } from "react-hook-form";
import Input from "../ui/Input";
import { Button } from "../ui/Button";

export interface Field {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  requiredText?: string;
  errorText: string;
  pattern?: ValidationRule<RegExp> | undefined;
}

interface DynamicFormProps {
  fields: Field[];
  className?: string;
  onSubmit: (data: FieldValues) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  className,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <Input
            label={field.label}
            inputProps={{
              ...register(field.name, {
                required: field.required,
                pattern: field.pattern,
              }),
              type: field?.type,
            }}
          />
          {errors[field.name] && <span>{field.errorText}</span>}
        </div>
      ))}
      <div className="col-span-3">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default DynamicForm;
