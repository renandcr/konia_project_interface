import { actionAddProducts } from "../../modules/dbProducts/actions";
import { motion, AnimatePresence } from "framer-motion";
import DefaultButton from "../DefaultButton";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import * as React from "react";

import {
  ModalAddProductsTextFieldContainer,
  ModalAddProductsTitleContainer,
  ModalAddProductsContainer,
} from "./style";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

export interface IModalAddProducts {
  setDisplayModal: React.Dispatch<boolean>;
  displayModal: boolean;
}

const ModalAddProducts: React.FC<IModalAddProducts> = ({
  setDisplayModal,
  displayModal,
}) => {
  const [inputValue, setInputValue] = React.useState("");

  const dispatch = useDispatch();

  const submissionMethod = (data: string) => {
    api
      .post(`/product`, { name: data })
      .then((response) => {
        dispatch(actionAddProducts(response.data));
        toast.success("Item cadastrado com sucesso");
      })
      .catch((err) => toast.error(err.response.data.name[0]));
  };

  return (
    <AnimatePresence>
      {displayModal && (
        <ModalAddProductsContainer>
          <motion.div
            key="modal_add"
            className="modal_add"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
          >
            <ModalAddProductsTitleContainer>
              <h1>Adicionar Produto</h1>
              <IoIosClose
                className="icon_close"
                onClick={() => setDisplayModal(false)}
              />
            </ModalAddProductsTitleContainer>
            <ModalAddProductsTextFieldContainer>
              <input
                type="text"
                placeholder="Digite o nome do produto"
                autoFocus
                onChange={(e) => setInputValue(e.target.value)}
              />
            </ModalAddProductsTextFieldContainer>
            <DefaultButton
              height="45px"
              onClick={() => submissionMethod(inputValue)}
            >
              {"Salvar Produto"}
            </DefaultButton>
          </motion.div>
        </ModalAddProductsContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalAddProducts;
