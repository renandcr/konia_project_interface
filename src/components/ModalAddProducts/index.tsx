import { motion, AnimatePresence } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { Dispatch } from "react";

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
  setDisplayModal: Dispatch<boolean>;
  displayModal: boolean;
}

const ModalAddProducts: React.FC<IModalAddProducts> = ({
  setDisplayModal,
  displayModal,
}): JSX.Element => {
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
              <GrFormClose
                className="icon_close"
                onClick={() => setDisplayModal(false)}
              />
            </ModalAddProductsTitleContainer>
            <ModalAddProductsTextFieldContainer>
              <input
                type="text"
                placeholder="Digite o nome do produto"
                // value={search}
                // onChange={}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter")
                //     dispatch(actionSearchProduct(search, dbProducts));
                // }}
              />
            </ModalAddProductsTextFieldContainer>
          </motion.div>
        </ModalAddProductsContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalAddProducts;
