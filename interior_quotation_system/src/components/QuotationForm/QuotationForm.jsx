import { useQuery } from "@tanstack/react-query";
import { Spin, Table, message } from "antd";
import { useRef, useState } from "react";
import QuotationAPI from "../../api/quotation";
import "../../styles/components/quotationForm.scss";
import QuotationModal from "./QuotationModal";
import { QuotationColumns } from "./constant";
const QuotationForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [setQuotation] = useState();
  const quotationRef = useRef();

  const {
    isPending,
    data: quotationsList,
    refetch: getQuotationList,
  } = useQuery({
    queryKey: ["quotation"],
    queryFn: () => QuotationAPI.GetQuotationsList(),
    onSuccess: (response) => {
      setQuotation(response);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Error occur when get quotation list",
      });
    },
  });
  console.log(quotationsList);
  const onEditQuotation = (id) => {
    console.log(id);
    quotationRef.current.openModal(id);
  };
  const total = quotationsList?.$values.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  return (
    <Spin tip="Loading..." spinning={isPending}>
      <QuotationModal
        ref={quotationRef}
        AfterCloseModal={() => getQuotationList()}
      />
      {contextHolder}
      <div className="quotation-form" id="dangpro">
        <div className="title">
          <h3>Quotation Table</h3>
        </div>
        <div className="text-container">
          <div className="left-text">
            <div>
              <strong>Email:</strong>
              <span>daihocfpt@fpt.edu.vn</span>
            </div>
            <div>
              <strong>Số điện thoại:</strong>
              <span>028 7300 1866</span>
            </div>
            <div>
              <strong>Showroom:</strong>
              <span>
                Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ
                Đức, TP. Hồ Chí Minh
              </span>
            </div>
            <div>
              <strong>Xưởng sản xuất:</strong>
              <span>
                Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ
                Đức, TP. Hồ Chí Minh
              </span>
            </div>
          </div>
          <div className="right-text">
            <div>
              <strong>Khách hàng:</strong>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
            <div>
              <strong>Số điện thoại:</strong>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div>
              <strong>Địa chỉ công trình:</strong>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div>
              <strong>Ngày soạn báo giá:</strong>
              <input type="text" />
            </div>
          </div>
        </div>
        <strong style={{ fontSize: "32px" }} className="">
          Total Price:
        </strong>{" "}
        <span style={{ fontSize: "32px" }}>{total}$</span>
        {quotationsList && (
          <Table
            columns={QuotationColumns({ onEditQuotation })}
            dataSource={quotationsList.$values}
          />
        )}
        {/* <TableHeader />
        <TableBody /> */}
        {/* <div className="note-2">
          <p className="note-text">
            Báo giá trên chỉ mang tính chất tham khảo do chưa có số liệu công
            trình thực tế. Vui lòng liên hệ sale:
          </p>
        </div> */}
      </div>
    </Spin>
  );
};

export default QuotationForm;
