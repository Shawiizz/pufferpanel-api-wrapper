export interface NodeResponse {
    id: number;
    name: string;
    privateHost: string;
    privatePort: number;
    publicHost: string;
    publicPort: number;
    sftpPort: number;
}
export interface DeploymentData {
    clientId: string;
    clientSecret: string;
    publicKey: string;
}
export interface SelfUserResponse {
    email: string;
    id: number;
    newPassword: string;
    password: string;
    username: string;
}
export interface OAuth2ClientResponse {
    client_id: string;
    description: string;
    name: string;
}
export interface OAuth2ClientCreateResponse {
    id: string;
    secret: string;
}
export interface GetServersRequest {
    paging: Paging;
    servers: Server[];
}
export interface Paging {
    maxSize: number;
    page: number;
    pageSize: number;
    total: number;
}
export interface Server {
    data: any;
    id: string;
    ip: string;
    name: string;
    node: NodeResponse;
    nodeId: number;
    port: number;
    type: string;
    users: {
        scopes: string[];
        username: string;
    }[];
}
export interface PufferPermissions {
    admin: boolean;
    createServers: boolean;
    deleteServers: boolean;
    deployNodes: boolean;
    editNodes: boolean;
    editServerAdmin: boolean;
    editServerData: boolean;
    editServerUsers: boolean;
    editTemplates: boolean;
    editUsers: boolean;
    email: string;
    installServer: boolean;
    panelSettings: boolean;
    putServerFiles: boolean;
    sendServerConsole: boolean;
    serverIdentifier: string;
    sftpServer: boolean;
    startServer: boolean;
    stopServer: boolean;
    username: string;
    viewNodes: boolean;
    viewServerConsole: boolean;
    viewServerFiles: boolean;
    viewServerStats: boolean;
    viewServers: boolean;
    viewTemplates: boolean;
    viewUsers: boolean;
}
export interface PufferServerUserPermissions {
    editServerData: boolean;
    installServer: boolean;
    viewServerConsole: boolean;
    stopServer: boolean;
    sendServerConsole: boolean;
    startServer: boolean;
    viewServerStats: boolean;
    sftpServer: boolean;
    viewServerFiles: boolean;
    putServerFiles: boolean;
    editServerUsers: boolean;
}
export interface GetServerRequest {
    permissions: PufferPermissions;
    server: Server;
}
/**
 * @param username Username to filter on, default is current user if NOT admin
 * @param node Node ID to filter on
 * @param name Name of server to filter on
 * @param limit Max number of results to return
 * @param page What page to get back for many results
 */
export interface GetServersQuery {
    username?: string;
    node?: number;
    name?: string;
    limit?: number;
    page?: number;
}
