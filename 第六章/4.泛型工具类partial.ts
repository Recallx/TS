

type Partial1<T> = {
    [P in keyof T]?: T[P]
}

type Props = {a: number; b:string; c: boolean}
type ParialProps = Partial1<Props>

