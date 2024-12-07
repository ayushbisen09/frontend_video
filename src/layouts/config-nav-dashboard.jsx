import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('dashboard'),
  inbox: icon('live-chat'),
  contact: icon('contacts'),
  agentQueue: icon('agent-queue'),
  templates: icon('template'),
  broadcast: icon('broadcast'),
  flows: icon('flows'),
  settings: icon('settings'),
  gethelp: icon('get-help'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'Inbox', path: paths.dashboard.inbox, icon: ICONS.inbox },
      { title: 'Contact', path: paths.dashboard.contacts, icon: ICONS.contact },
      { title: 'Agent Queue', path: paths.dashboard.agentqueues, icon: ICONS.agentQueue },
      { title: 'Templates', path: paths.dashboard.templates, icon: ICONS.templates },
      { title: 'Broadcast', path: paths.dashboard.broadcast, icon: ICONS.broadcast },
      { title: 'Flow', path: paths.dashboard.flows, icon: ICONS.flows },
    ],
  },

  {
    items: [
      {
        title: 'Settings',
        path: paths.dashboard.settings.root,
        icon: ICONS.settings,
        children: [
          { title: 'Opt In Management', path: paths.dashboard.settings.root },
          { title: 'Inbox Settings', path: paths.dashboard.settings.inboxsettings },
          { title: 'User Attributes', path: paths.dashboard.settings.userattributes },
        ],
      },
    ],
  },
  {
    items: [{ title: 'Get Help', path: paths.dashboard.gethelp, icon: ICONS.gethelp }],
  },
];
