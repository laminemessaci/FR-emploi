/* eslint-disable max-len */
import { getEnvironment as getEnv } from '../../env'

// GraphQL
export const API_GRAPHQL = () => `${getEnv().API_GRAPHQL}`

// Auth
export const API_AUTH_LOGOUT = () => `${getEnv().APP_AUTH}/logout`
export const API_AUTH_PING = () => `${getEnv().APP_AUTH}/api/v1/users/ping.json`
export const API_AUTH_REGISTER_DEVICE = () =>
  `${getEnv().APP_AUTH}/api/v1/devices.json`
export const API_AUTH_AUTHENTICATE_DEVICE = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/authenticate.json`
export const API_AUTH_LOGIN = () => `${getEnv().APP_AUTH}/login`
export const API_AUTH_GET_PROVIDER = () =>
  `${getEnv().APP_AUTH}/provider/:username`
export const API_AUTH_WITH_AZURE = () => `${getEnv().APP_AUTH}/pro?prompt=login`

// Notifications
export const API_AUTH_REGISTER_NOTIFICATION = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/:deviceId/register-notification.json`
export const API_AUTH_UNREGISTER_NOTIFICATION = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/:deviceId/unregister-notification.json`
export const API_AUTH_DEVICE_CHANNELS = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/:deviceId/channels.json`
export const API_AUTH_MFA_ENABLE_DEVICE = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/:deviceId/enable_mfa.json`
export const API_AUTH_MFA_DISABLE_DEVICE = () =>
  `${getEnv().APP_AUTH}/api/v1/devices/:deviceId/disable_mfa.json`

// Marketplace
export const API_MARKETPLACE_MODULE_ACCESS = () =>
  `${getEnv().APP_MARKETPLACE}/api/v1/module_accesses.json`

// ActivityCenter
export const API_AC_ACTIONS = () => `${getEnv().APP_AC}/api/v1/actions.json`

// Buro
export const API_AUTH_ME = () =>
  `${getEnv().APP_AUTH}/api/_proxy/auth/api/v2/me.json`
export const BURO_HOME = () => `${getEnv().APP_BURO}/`
export const API_BURO_UPDATE_INFORMATIONS = () =>
  `${getEnv().APP_BURO}/api/v1/me/informations.json`

// Cred
export const API_ADDRESS_BOOK_COMPANY = () =>
  `${getEnv().APP_CRED}/api/v1/access/users/:id/companies.json`
export const API_ADDRESS_BOOK_USER = () =>
  `${getEnv().APP_CRED}/api/v1/access/users/:id/users.json`

// Document Manager
export const API_GED_ROOT_LIST = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/navigations.json`
export const API_GED_ROOT_LIST_FOR_ENTITY = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/navigations/:type/entities/:id.json`
export const API_GED_DOCUMENT_LIST_FOR_QUERY = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/navigations/:type/searches/:id.json`
export const API_GED_ROOT_LIST_FOR_BOX = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/navigations/:type/boxes/:id.json`
export const API_GED_TYPE_LIST = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/types.json`
export const API_GED_POST_TO_BOX = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/documents`
export const API_GED_DOCUMENT_DETAIL = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v2/documents/:id.json`
export const API_UPLOAD_NEW_VERSION_DOCUMENT = () =>
  `${getEnv().APP_TASK}/api/_proxy/document/api/v3/documents.json`
export const API_UPLOAD_DOCUMENT = () =>
  `${getEnv().APP_DOCUMENT_MANAGER}/api/v3/documents.json`

// Interop
export const API_INTEROP_ACCOUNTING_JOURNAL = () =>
  `${getEnv().APP_INTEROP}/api/v5/book/list/:id`
export const API_INTEROP_DOCUMENTS_JOURNAL = () =>
  `${getEnv().APP_INTEROP}/api/v5/documents`
export const API_INTEROP_POST_MAIL_NOTIFICATION = () =>
  `${getEnv().APP_INTEROP}/api/v5/actions/send-documents`

// Bank
export const API_BANK_ACCOUNT = () =>
  `${getEnv().APP_BURO}/api/v1/bank/accounts.json`
export const API_BANK_ACCOUNT_LINE = () =>
  `${getEnv().APP_BURO}/api/v1/bank/accounts/:id.json`

// RSS
export const API_RSS = () => `${getEnv().APP_BURO}/api/v1/widget_data/:id.json`

// tasks
export const API_TASKS = () => `${getEnv().APP_TASK}/api/v1/tasks.json`
export const API_TASK_GET = () => `${getEnv().APP_TASK}/api/v1/tasks/:id.json`
export const API_TASK_UPDATE = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id.json`
export const API_TASK_STATUS = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id/status/:status.json`
export const API_TASK_STATISTICS = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/statistics.json`
export const API_TASK_DELETE = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id.json`
export const API_TASK_SEARCH = () => `${getEnv().APP_TASK}/api/v1/search.json`
export const API_TASK_MISSION = () =>
  `${getEnv().APP_TASK}/api/v1/missions.json`
export const API_TASK_ACTIVITY = () =>
  `${getEnv().APP_TASK}/api/v2/tasks/:id/activities.json`
export const API_TASK_COMMENT = () =>
  `${getEnv().APP_TASK}/api/v1/comments/:id.json`
export const API_TASK_ANSWER = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id/answer.json`
export const API_TASK_ATTACHMENT = () =>
  `${getEnv().APP_TASK}/api/v1/task/:id/document/:versionId/file`
export const API_TASK_ATTACHMENT_POST = () =>
  `${getEnv().APP_TASK}/api/v1/attachments.json`
export const API_TASK_DOCUMENT_POST = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id/documents.json`
export const API_TASK_DOCUMENT_DELETE = () =>
  `${getEnv().APP_TASK}/api/v1/tasks/:id/documents/:external_identifier.json`
export const API_TASK_SUBMIT_FORCED_REVIEW = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:id/review/forced.json`

// tasks approvals
export const API_APPROVE_POST = () =>
  `${getEnv().APP_TASK}/api/v1/approvals.json`
export const API_APPROVE_PUBLISH = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:id/publish.json`
export const API_APPROVE_PUT = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:id.json`
export const API_APPROVE_DELETE = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:id.json`
export const API_REVIEW_APPROVAL_POST = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:id/review.json`
export const API_APPROVE_DOCUMENT_POST = () =>
  `${
    getEnv().APP_TASK
  }/api/v1/approvals/:approvalId/documents/:documentId/approve.json`
export const API_APPROVE_ALL_DOCUMENTS_POST = () =>
  `${getEnv().APP_TASK}/api/v1/approvals/:approvalId/documents/approve.json`
export const API_REJECT_DOCUMENT_POST = () =>
  `${
    getEnv().APP_TASK
  }/api/v1/approvals/:approvalId/documents/:documentId/reject.json`
export const API_COMMENT_DOCUMENT = () =>
  `${
    getEnv().APP_TASK
  }/api/v1/approvals/:approvalId/documents/:documentId/comment.json`
export const API_TASK_DOCUMENT_ACTIVITIES = () =>
  `${
    getEnv().APP_TASK
  }/api/v1/approvals/:approvalId/documents/:documentId/activities.json`
export const API_TASK_APPROVAL_ACTIVITIES = () =>
  `${getEnv().APP_TASK}/api/v2/tasks/:approvalId/activities.json`
export const API_TASK_REFUSE_DOCUMENT_REVIEW = () =>
  `${
    getEnv().APP_TASK
  }/api/v1/approvals/:approvalId/documents/:documentId/refuse_review.json`
export const API_TASK_REMOVE_ATTACHMENT = () =>
  `${getEnv().APP_TASK}/api/v1/attachments/:uuid.json`

// threads
export const API_THREADS = () => `${getEnv().APP_MESSENGER}/api/v1/threads.json`
export const API_THREAD_POST = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads.json`
export const API_THREAD_GET = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id.json`
export const API_THREAD_SEARCH = () =>
  `${getEnv().APP_MESSENGER}/api/v1/search.json`
export const API_THREAD_ATTACHMENT = () =>
  `${getEnv().APP_MESSENGER}/api/v1/attachments/:id/download`
export const API_THREAD_REPLY = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id/reply.json`
export const API_THREAD_ATTACHMENT_POST = () =>
  `${getEnv().APP_MESSENGER}/api/v1/attachments.json`
export const API_THREAD_ATTACHMENT_DELETE = () =>
  `${getEnv().APP_MESSENGER}/api/v1/attachments/:uuid.json`
export const API_THREAD_ARCHIVE = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id/archive.json`
export const API_THREAD_UNARCHIVE = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id/unarchive.json`
export const API_THREAD_READ = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id/read.json`
export const API_THREAD_UNREAD = () =>
  `${getEnv().APP_MESSENGER}/api/v1/threads/:id/unread.json`

// crm
export const API_PERSONS_LIST = () =>
  `${getEnv().APP_CRM}/api/v2/persons.json?abandonned=with&`
export const API_GET_PERSON = () =>
  `${getEnv().APP_CRM}/api/v1/persons/:id.json?display_deleted=1&`
export const API_GET_PERSON_COMPANIES = () =>
  `${getEnv().APP_CRM}/api/v1/persons/:id/companies.json`
export const API_GET_PERSON_RELATIONSHIPS = () =>
  `${getEnv().APP_CRM}/api/v1/relationship/person_list/:id.json`
export const API_GET_USER = () => `${getEnv().APP_CRM}/api/v1/users/:id.json`
export const API_MISSIONS_BY_PERSON = () =>
  `${
    getEnv().APP_CRM
  }/api/v2/persons/:id/missions.json?page=:page&max_per_page=:max_per_page`
export const API_MISSIONS_LIST = () =>
  `${getEnv().APP_CRM}/api/v2/missions.json`
export const API_GET_MISSION = () =>
  `${getEnv().APP_CRM}/api/v1/missions/:id.json`
export const API_GET_MISSION_DOCUMENTS = () =>
  `${getEnv().APP_CRM}/api/v1/missions/:id/documents.json`
export const API_GET_MISSION_RELATIONSHIPS = () =>
  `${getEnv().APP_CRM}/api/v1/relationship/mission_list/:id.json`
export const API_GET_ODS_TOKEN = () =>
  `${getEnv().APP_CRM}/api/v1/document/documents/:id/pdf/token.json`
export const API_GET_COMPANY_KPI = () =>
  `${getEnv().APP_CRM}/api/v1/companies/:id/key-figures.json`
export const API_GET_RELATIONSHIPS_PARTICIPANTS = () =>
  `${getEnv().APP_CRM}/api/v1/relationship/participants.json`
export const API_GET_AGENCY = () =>
  `${getEnv().APP_CRM}/api/v1/relationship/offices.json?page=1&q=:agency_label`
export const API_GET_SIGNATORY_ADDRESS_LIST = () =>
  `${
    getEnv().APP_CRM
  }/api/v1/addresses.json?companyIds[]=:companyId&page=1&personIds[]=:personId`
export const API_CREATE_RELATIONSHIP = () =>
  `${getEnv().APP_CRM}/api/v1/relationship.json`

// get moduleAccess by id
export const API_MARKETPLACE_MODULE_ACCESS_BY_ID = () =>
  `${getEnv().APP_MARKETPLACE}/api/v1/module_accesses/:id/check_access.json`
