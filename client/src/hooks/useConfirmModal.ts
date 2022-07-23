import {useState} from "react";

const useConfirmModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [onConfirm, setOnConfirm] = useState(() => () => {});

	return {isModalOpen, setIsModalOpen, onConfirm, setOnConfirm};
};

export default useConfirmModal;
