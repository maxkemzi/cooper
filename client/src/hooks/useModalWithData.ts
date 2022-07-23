import {useState} from "react";

const useModalWithData = <DataType>(
	initialValue: boolean = false,
	initialData: DataType = null
) => {
	const [isModalOpen, setIsModalOpen] = useState(initialValue);
	const [data, setData] = useState(initialData);

	return {isModalOpen, setIsModalOpen, data, setData};
};

export default useModalWithData;
