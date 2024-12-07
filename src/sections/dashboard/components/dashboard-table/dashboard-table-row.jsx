import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Divider, Typography } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function DashboardTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
  dashboardTableIndex,
}) {
  const confirm = useBoolean();

  const collapse = useBoolean();

  const popover = usePopover();

  const WhatsAppnumbers = [
    '+91 98765 43210',
    '+91 91234 56789',
    '+91 99887 65432',
    '+91 93456 78901',
    '+91 97654 32109',
    // Add more flow names as needed
  ];
  const phonenumberID = [
    '654532354351213',
    '542546584351354',
    '575454548454545',
    '345564764354545',
    '117563543435334',
    // Add more flow names as needed
  ];

  const weebhookURL = [
    'https://chatflow.pabbly.com/65e80c31e88b/5b654444',
    'https://chatflow.pabbly.com/65e80c31e88b/5dxzk545',
    'https://chatflow.pabbly.com/65e80c31e88b/5b665453',
    'https://chatflow.pabbly.com/65e80c31e88b/5b624242',
    'https://chatflow.pabbly.com/65e80c31e88b/5b653435',
    // Add more flow names as needed
  ];

  const dateAndTime = [
    'Oct 23, 2024 17:45:32',
    'Oct 24, 2024 14:25:32',
    'Oct 25, 2024 17:45:32',
    'Oct 26, 2024 17:45:32',
    'Oct 27, 2024 17:45:32',
  ];

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={onSelectRow}
          inputProps={{ id: `row-checkbox-${row.id}`, 'aria-label': `Row checkbox` }}
        />
      </TableCell>

      <TableCell width={110}>
        <Label
          variant="soft"
          color={
            (row.status === 'active' && 'success') ||
            (row.status === 'inactive' && 'error') ||
            'default'
          }
        >
          {row.status}
        </Label>

        <Box
          component="span"
          sx={{
            color: 'text.disabled',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '180px',
            display: 'inline-block',
          }}
        >
          {' '}
          {dateAndTime[dashboardTableIndex % dateAndTime.length]}
        </Box>
      </TableCell>

      <TableCell width={200}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">
              {WhatsAppnumbers[dashboardTableIndex % WhatsAppnumbers.length]}
            </Box>
            <Box
              component="span"
              sx={{
                color: 'text.disabled',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '180px',
                display: 'inline-block',
              }}
            >
              Phone No ID: {phonenumberID[dashboardTableIndex % phonenumberID.length]}
            </Box>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell width={200}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box
              component="span"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '300px',
                display: 'inline-block',
              }}
            >
              {weebhookURL[dashboardTableIndex % weebhookURL.length]}
            </Box>
            <Box
              component="span"
              sx={{
                color: 'text.disabled',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '300px',
                display: 'inline-block',
              }}
            >
              WhatsApp Business Account ID: 117359445455733
            </Box>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell width={140}>
        <Button variant="outlined" color="primary">
          Access Now
        </Button>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton
          color={collapse.value ? 'inherit' : 'default'}
          onClick={collapse.onToggle}
          sx={{ ...(collapse.value && { bgcolor: 'action.hover' }) }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton>

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}>
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral' }}
        >
          <Paper sx={{ m: 1.5 }}>
            <Box sx={{ px: 1.5, py: 3 }}>
              <Typography variant="body2">Access Token</Typography>
            </Box>
            <Divider />
            <Box sx={{ px: 1.5, py: 3 }}>
              <Typography variant="body2">Privacy Policy</Typography>
            </Box>
            <Divider />
            <Box sx={{ px: 1.5, py: 3 }}>
              <Typography variant="body2">Terms of Service URL</Typography>
            </Box>
          </Paper>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {renderSecondary}

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem
            onClick={() => {
              onViewRow();
              popover.onClose();
            }}
          >
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}
