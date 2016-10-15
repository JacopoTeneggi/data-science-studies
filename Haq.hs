import System.Environment

main :: IO()
main = getargs >>= print . haqify . head

haqify s = "Haq!" ++ s