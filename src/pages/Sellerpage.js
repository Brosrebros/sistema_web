import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import SellerForm from 'components/custom/SellerForm/SellerForm';
import SellerCard from 'components/custom/SellerCard/SellerCard';
import Pagination from 'components/custom/Pagination/Pagination';

const Sellerpage = () => {
  return (
    <CustomPageLayout>
      <SellerForm />

      <p
        style={{
          fontWeight: 'normal',
          color: '#424242',
          fontSize: '1.19em',
          lineHeight: '80%',
          margin: '0px',
        }}
      >
        <b>365</b>
        vendedores inmobiliarios encontrados
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
      {/* 
      <Pagination
        totalItems={100}
        itemsPerPageOptions={[5, 10, 20]}
        currentPage={10}
        canNextPage={10}
        canPreviousPage={10}
        paginationArray={10}
        activeValue={5}
        itemsPerPage={5}
        onPageChange={1}
        onItemsPerPageChange={1}
      /> */}
    </CustomPageLayout>
  );
};

export default Sellerpage;
