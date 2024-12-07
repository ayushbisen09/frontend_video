import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const DASHBOARD_STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export const _dashboard = [...Array(20)].map((_, index) => {
  const status = index % 2 === 0 ? 'active' : 'inactive';

  const whatsAppNumber = {
    id: _mock.id(index),
    name: _mock.fullName(index),
    email: _mock.email(index),
    avatarUrl: _mock.image.avatar(index),
    ipAddress: '192.158.1.38',
  };

  return {
    id: _mock.id(index),
    createdAt: _mock.time(index),
    whatsAppNumber,
    status,
  };
});
