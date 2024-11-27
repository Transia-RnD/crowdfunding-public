/**
 * Global App Paths
 */

/* Paths ==================================================================== */

function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

export const PATH_PAGE = {
  home: '/home',
  page403: '/403',
  page404: '/404',
  page500: '/500',
}

const ROOTS_DASHBOARD = '/'

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  campaigns: {
    root: path(ROOTS_DASHBOARD, '/campaigns'),
    list: path(ROOTS_DASHBOARD, '/campaigns/list'),
    view: (id: string) => path(ROOTS_DASHBOARD, `/campaigns/${id}`),
  },
}

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root
