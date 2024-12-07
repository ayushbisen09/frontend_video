import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { listItems } from 'src/_mock/_dashboardBigCardListItems';

import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';

import { WhatsAppDialog } from 'src/sections/dashboard/hook/add-whatsApp-number-dailogbox';
import DashboardFolder from 'src/sections/dashboard/components/dashboard-folder/dashboard-folder';
import { DashboardListView } from 'src/sections/dashboard/components/dashboard-table/dashboard-list-view';

import thumbnailImage from '../../../public/assets/images/big-card-thumbhnails/dashboard-big-card-thumbnail.png';

// ----------------------------------------------------------------------

const metadata = { title: `Pabbly Chatflow | Dashboard ` };
const { items, style } = listItems;

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <PageHeader
        title="Dashboard"
        description="Connecting Brands and Customers through WhatsApp Engagement and Marketing."
        buttonTitle="Add WhatsApp Number"
        onButtonClick={handleOpenDialog}
      />
      <WhatsAppDialog open={dialogOpen} onClose={handleCloseDialog} />

      <Box
        sx={{
          gap: 3,
          mt: 4,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' },
        }}
      >
        <StatsCards
          statsCasrdTitle="WhatsApp Message Credits Allotted"
          cardStats={10000}
          icon_name="credit-alloted-icon.svg"
          icon_color="#FFA92E"
          bg_gradient="#FFA92E"
        />

        <StatsCards
          statsCasrdTitle="WhatsApp Message Credits Consumed"
          cardStats={10000}
          icon_name="credit-comsumed-icon.svg"
          icon_color="#10CBF3"
          bg_gradient="#10CBF3"
        />

        <StatsCards
          statsCasrdTitle="WhatsApp Message Credits Remaining"
          cardStats={10000}
          icon_name="credit-remaining-icon.svg"
          icon_color="#1D88FA"
          bg_gradient="#1D88FA"
        />
        <StatsCards
          statsCasrdTitle="WhatsApp Number Added"
          cardStats={50}
          icon_name="whatsapp-number-added-icon.svg"
          icon_color="#28A645"
          bg_gradient="#28A645"
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ mt: 4 }}>
          <DashboardFolder />
        </Box>
        <Box sx={{ mt: 4, width: '100%' }}>
          <Box>
            <BigCard
              buttontitle="Add WhatsApp Number"
              style={style}
              items={items}
              coverSrc={thumbnailImage}
            />
          </Box>
          <Box>
            <DashboardListView />
          </Box>
        </Box>
      </Box>
    </DashboardContent>
  );
}
