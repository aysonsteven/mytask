// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a396c170ba4b6a7f45b20fccbdba0d2b81cc8833/pouchdb-replication/pouchdb-replication.d.ts
declare namespace PouchDB {
    namespace Replication {
        /** @todo When is this present? */
        interface ReplicationMeta {
            _replication_id: string;
            _replication_state: string;
            _replication_state_time: number;
            _replication_stats: {};
        }
    }
}

declare module 'pouchdb-replication' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
