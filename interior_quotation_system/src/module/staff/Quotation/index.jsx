import { useRef, useState } from 'react';
import QuotationModal from '../../../components/QuotationForm/QuotationModal';
import { QUOTATION_COLUMNS, QUOTATION_DATA_SOURCE } from './constant';
import TableLayout from '../../../layouts/TableLayout';
import QuotationDetailModal from './QuotationDetailModal';
import QuotationAPI from '../../../api/quotation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';

const StaffQuotation = () => {
  const quotationModal = useRef();
  const quotationDetailModal = useRef();
  const quotationEdit = useRef();
  const quotationRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const [quotations, setQuotations] = useState({
    responses: [],
  });

  const {
    isPending,
    data: quotationsList,
    refetch: getQuotationList,
  } = useQuery({
    queryKey: ['quotation'],
    queryFn: () => QuotationAPI.GetQuotationsList(),
    onSuccess: (response) => {
      setQuotations(response);
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Error occur when get quotation list',
      });
    },
  });

  const searchStaffQuotation = (event) => {};
  // console.log(quotationsList.$values);
  const quotation = () => {

    return quotationsList?.$values;
  };
  const onDetailQuotation = (id) => {
    quotationDetailModal.current.openModal(id);
  };
  const onEditQuotation = (id) => {
    console.log(id)
    quotationRef.current.openModal(id);
  };
  return (
    <>
      <QuotationModal ref={quotationModal} />
      <QuotationDetailModal ref={quotationDetailModal} />
      <QuotationModal
        ref={quotationRef}
        AfterCloseModal={() => getQuotationList()}
      />
      {contextHolder}
      <TableLayout
        tableColumns={QUOTATION_COLUMNS}
        tableDataSource={quotation}
        actionName={'Confirm Quotation'}
        onchangeSearch={searchStaffQuotation}
        addNewAction={() => quotationModal.current.openModal()}
        onEditQuotation={onEditQuotation}
        viewProductDetail={onDetailQuotation}
      />
    </>
  );
};

export default StaffQuotation;
