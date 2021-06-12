import { createSelector} from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectorySecions = createSelector(
    [selectDirectory],
    directory => directory.sections
)