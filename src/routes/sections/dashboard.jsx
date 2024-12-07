import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const Dashboard = lazy(() => import('src/pages/app/dashboard'));
const Inbox = lazy(() => import('src/pages/app/inbox'));
const Contacts = lazy(() => import('src/pages/app/contacts'));
const AgentQueues = lazy(() => import('src/pages/app/agent-queue'));
const Templates = lazy(() => import('src/pages/app/templates'));
const Broadcast = lazy(() => import('src/pages/app/broadcast'));
const Flows = lazy(() => import('src/pages/app/flows'));
const GetHelp = lazy(() => import('src/pages/app/get-help'));

const OptInManagement = lazy(() => import('src/pages/app/opt-in-management'));
const InboxSetting = lazy(() => import('src/pages/app/inbox-settings'));
const UserAttributes = lazy(() => import('src/pages/app/user-attributes'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <Dashboard />, index: true },
      { path: 'inbox', element: <Inbox /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'agent-queue', element: <AgentQueues /> },
      { path: 'templates', element: <Templates /> },
      { path: 'broadcast', element: <Broadcast /> },
      { path: 'flows', element: <Flows /> },
      { path: 'get-help', element: <GetHelp /> },

      {
        path: 'settings',
        children: [
          { element: <OptInManagement />, index: true },
          { path: 'inbox-settings', element: <InboxSetting /> },
          { path: 'user-attributes', element: <UserAttributes /> },
        ],
      },
    ],
  },
];
